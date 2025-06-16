{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": ">0.25%, not dead",
        "useBuiltIns": "usage",
        "corejs": "3.33"
      }
    ],
    [
      "@babel/preset-react",
      {
        "runtime": "automatic",
        "importSource": "@emotion/react"
      }
    ]
  ],
  "plugins": [
    "babel-plugin-macros",
    [
      "@emotion/babel-plugin",
      {
        "sourceMap": true,
        "autoLabel": "dev-only",
        "labelFormat": "[local]",
        "cssPropOptimization": true
      }
    ]
  ],
  "sourceMaps": true,
  "compact": false
}