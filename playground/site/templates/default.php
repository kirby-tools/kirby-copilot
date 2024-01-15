<?php

/** @var \Kirby\Cms\App $kirby */
go($kirby->user() !== null ? '/panel/site' : '/panel/login');
