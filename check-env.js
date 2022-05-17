const requiredVariables = [
  'COCKPIT_TOKEN',
  'COCKPIT_HOST',
  'COCKPIT_PATH',
  'COCKPIT_ASSETS_URL',
  'COCKPIT_FORM_TOKEN',
  'BASE_HOST',
]

const missingVariables = requiredVariables.filter(
  (variableName) => !process.env[variableName],
)

if (missingVariables.length === 0) {
  process.exit(0)
} else {
  console.error(
    `Missing environment variables:\n\n ${missingVariables.join('\n')}`,
  )
  process.exit(1)
}
