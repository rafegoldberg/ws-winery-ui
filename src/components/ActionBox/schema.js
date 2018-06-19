export default {
  title: {
    type: String,
    default: "a title for this box"
  },
  content: {
    type: [ Array, String, Object ],
    required: true,
    default: [ 'zed', 'one', 'two' ]
  },
  cta: {
    type: String,
  },
  layout: {
    type: String,
    default: ""
  },
  level: {
    type: [String,Number]
  },
  scale: {
    type: [String,Number]
  }
}