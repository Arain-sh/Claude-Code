// Content for the claude-api bundled skill.
//
// The original repository expects a large tree of Markdown assets under
// src/skills/bundled/claude-api/. Those files are not present in this
// reverse-engineered fork, but external builds still need this module to
// resolve cleanly even when the related feature flag is disabled.

// @[MODEL LAUNCH]: Update the model IDs/names below if this skill is restored.
export const SKILL_MODEL_VARS = {
  OPUS_ID: 'claude-opus-4-6',
  OPUS_NAME: 'Claude Opus 4.6',
  SONNET_ID: 'claude-sonnet-4-6',
  SONNET_NAME: 'Claude Sonnet 4.6',
  HAIKU_ID: 'claude-haiku-4-5',
  HAIKU_NAME: 'Claude Haiku 4.5',
  PREV_SONNET_ID: 'claude-sonnet-4-5',
} satisfies Record<string, string>

export const SKILL_PROMPT =
  'The bundled claude-api skill assets are not included in this fork.'

export const SKILL_FILES: Record<string, string> = {}
