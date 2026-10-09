<script setup lang="ts">
import type { LicenseStatus } from "@kirby-tools/licensing";
import type { PropType } from "vue";
import type { AgentConnection } from "../../types";
import type { AgentsSetupProblem } from "../../utils/agents";
import { LicensingButtonGroup } from "@kirby-tools/licensing/components";
import { computed, onMounted, ref, useHelpers, usePanel } from "kirbyuse";
import {
  checkAgentsSetup,
  formatRelativeTime,
  summarizeLabels,
} from "../../utils/agents";

const props = defineProps({
  mcpUrl: { type: String, required: true },
  isAdmin: Boolean,
  connections: {
    type: Array as PropType<AgentConnection[]>,
    default: () => [],
  },
  licenseStatus: String as PropType<LicenseStatus>,
});

const DOCS_URL = "https://kirby.tools/docs/copilot/agents";

const panel = usePanel();
const docsLinkText = panel.t("johannschopplich.copilot.agents.docs");
const helpers = useHelpers();
const licenseStatus = __PLAYGROUND__ ? "active" : props.licenseStatus;
const setupProblems = ref<AgentsSetupProblem[]>([]);

onMounted(async () => {
  setupProblems.value = await checkAgentsSetup({
    mcpUrl: props.mcpUrl,
    pageProtocol: window.location.protocol,
  });
});

const columns = computed(() => ({
  agent: {
    label: panel.t("johannschopplich.copilot.agents.agent"),
    type: "copilot-agent",
  },
  ...(props.isAdmin && {
    account: { label: panel.t("account"), type: "text" },
  }),
  permissions: {
    label: panel.t("johannschopplich.copilot.agents.permissions"),
    type: "text",
  },
  lastUsedAt: {
    label: panel.t("johannschopplich.copilot.agents.lastActive"),
    type: "text",
    width: "1/6",
  },
}));

const rows = computed(() => {
  const now = Date.now();

  return props.connections.map((connection) => ({
    ...connection,
    permissions: summarizeLabels(connection.permissions, (count) =>
      panel.t("johannschopplich.copilot.agents.more", { count }),
    ),
    lastUsedAt: connection.lastUsedAt
      ? formatRelativeTime(connection.lastUsedAt, now, panel.translation.code)
      : panel.t("johannschopplich.copilot.agents.lastActive.never"),
    // A single table option renders as a button, which ignores `dialog`.
    options: [
      {
        icon: "trash",
        text: panel.t("johannschopplich.copilot.agents.revoke"),
        click: () => panel.dialog.open(connection.revokeDialog),
      },
    ],
  }));
});

function copyMcpUrl() {
  // Works without a secure context, unlike `navigator.clipboard`.
  helpers.clipboard.write(props.mcpUrl);
  panel.notification.success(panel.t("copy.success"));
}
</script>

<template>
  <k-panel-inside class="k-copilot-agents-view">
    <k-header>
      {{ panel.t("johannschopplich.copilot.agents") }}

      <template v-if="licenseStatus !== undefined" #buttons>
        <LicensingButtonGroup
          label="Kirby Copilot"
          api-namespace="__copilot__"
          :license-status="licenseStatus"
          pricing-url="https://kirby.tools/copilot/buy"
        />
      </template>
    </k-header>

    <div class="[&>*+*]:kai-mt-[var(--spacing-12)]">
      <k-section
        :label="panel.t('johannschopplich.copilot.agents.mcpUrl')"
        :buttons="[{ icon: 'copy', text: panel.t('copy'), click: copyMcpUrl }]"
      >
        <k-box theme="text">
          <code class="kai-select-all">{{ mcpUrl }}</code>
        </k-box>
        <k-text
          class="kai-mt-[var(--spacing-2)] kai-text-[var(--color-text-dimmed)]"
        >
          <p>
            {{ panel.t("johannschopplich.copilot.agents.mcpUrl.help") }}
            <k-link :to="DOCS_URL" target="_blank">{{ docsLinkText }}</k-link
            >.
          </p>
        </k-text>
        <k-box
          v-for="problem in setupProblems"
          :key="problem.type + ('url' in problem ? problem.url : '')"
          class="kai-mt-[var(--spacing-3)]"
          theme="negative"
          icon="alert"
          :html="true"
          :text="
            panel.t(
              `johannschopplich.copilot.agents.setup.${problem.type}`,
              'url' in problem
                ? { url: helpers.string.escapeHTML(problem.url) }
                : {},
            )
          "
        />
      </k-section>

      <k-section :label="panel.t('johannschopplich.copilot.agents')">
        <k-table
          v-if="rows.length > 0"
          :columns="columns"
          :rows="rows"
          :index="false"
        />
        <k-empty v-else icon="ai">
          <k-text>
            <p>
              {{ panel.t("johannschopplich.copilot.agents.empty") }}
              <k-link :to="DOCS_URL" target="_blank">{{ docsLinkText }}</k-link
              >.
            </p>
          </k-text>
        </k-empty>
      </k-section>
    </div>
  </k-panel-inside>
</template>
