{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": ">0.25%, not dead"
      }
    ],
    [
      "@babel/preset-react",
      {
        "runtime": "automatic"
      }
    ]
  ],
  "plugins": [
    "babel-plugin-macros",
    "@emotion/babel-plugin"
  ]
}