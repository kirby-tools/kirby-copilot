<script setup lang="ts">
import type { PropType } from "vue";
import { ref, usePanel } from "kirbyuse";
import { PLUGIN_AGENTS_CONSENT_API_ROUTE } from "../../constants";

const props = defineProps({
  id: String,
  site: String,
  account: String,
  client: Object as PropType<{
    name: string;
    host: string | null;
    isVerified: boolean;
  } | null>,
  redirect: Object as PropType<{
    type: "web" | "local" | "app";
    label: string;
  } | null>,
  permissions: Array as PropType<
    { value: string; text: string; info: string; disabled: boolean }[]
  >,
  defaultPermissions: Array as PropType<string[]>,
});

const panel = usePanel();
const selectedPermissions = ref<string[]>([
  ...(props.defaultPermissions ?? []),
]);
const isSubmitting = ref(false);

async function decide(isApproved: boolean) {
  isSubmitting.value = true;

  try {
    const { redirect } = await panel.api.post<{ redirect: string }>(
      `${PLUGIN_AGENTS_CONSENT_API_ROUTE}/${props.id}`,
      { isApproved, permissions: selectedPermissions.value },
    );

    // The client's redirect URI may use an app scheme, which only a full navigation opens.
    window.location.assign(redirect);
  } catch (error) {
    isSubmitting.value = false;
    panel.notification.error(error as Error);
  }
}
</script>

<template>
  <k-panel-outside class="k-copilot-agents-authorize-view">
    <div class="k-dialog">
      <k-dialog-body v-if="client" class="[&>*+*]:kai-mt-[var(--spacing-6)]">
        <header class="[&>*+*]:kai-mt-[var(--spacing-2)]">
          <k-headline tag="h1">
            {{
              panel.t("johannschopplich.copilot.agents.authorize.headline", {
                client: client.host ?? client.name,
                site,
              })
            }}
          </k-headline>
          <k-text v-if="client.host && client.name !== client.host">
            <p>{{ client.name }}</p>
          </k-text>
        </header>

        <k-text>
          <p>
            {{
              panel.t("johannschopplich.copilot.agents.authorize.account", {
                account,
              })
            }}
          </p>
        </k-text>

        <k-checkboxes-input
          :options="permissions"
          :value="selectedPermissions"
          @input="selectedPermissions = $event"
        />

        <k-box
          v-if="redirect"
          :theme="redirect.type === 'web' ? 'info' : 'notice'"
          :text="
            panel.t(
              `johannschopplich.copilot.agents.authorize.redirect.${redirect.type}`,
              { label: redirect.label },
            )
          "
        />
      </k-dialog-body>
      <k-dialog-body v-else>
        <k-box
          theme="negative"
          :text="panel.t('johannschopplich.copilot.agents.authorize.expired')"
        />
      </k-dialog-body>

      <k-dialog-footer v-if="client">
        <k-button-group layout="collapsed" class="kai-justify-end">
          <k-button
            :text="panel.t('cancel')"
            variant="filled"
            :disabled="isSubmitting"
            @click="decide(false)"
          />
          <k-button
            icon="check"
            :text="panel.t('johannschopplich.copilot.agents.authorize.connect')"
            theme="positive"
            variant="filled"
            :disabled="isSubmitting"
            @click="decide(true)"
          />
        </k-button-group>
      </k-dialog-footer>
    </div>
  </k-panel-outside>
</template>
