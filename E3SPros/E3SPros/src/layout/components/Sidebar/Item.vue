<script>
export default {
  name: 'MenuItem',
  functional: true,
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  render(h, context) {
    const { icon, title } = context.props
    const vnodes = []

    if (icon) {
     //vnodes.push(<svg-icon icon-class={icon}/>)
     var className = "svg-icon iconfont "+icon;
     vnodes.push(<i class={className}></i>)
    }

    if (title) {
      vnodes.push(<span>{(title)}</span>)
    }
    return vnodes
  }
}
</script>
