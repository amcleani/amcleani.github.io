import { QuartzComponentConstructor } from "./types"

export default (() => {
  return () => (
       <div class="site-contact">
      <div class="line">
        <a href="mailto:cleani@usc.edu">cleani@usc.edu</a>
      </div>

      <div class="line">
        <a href="https://philpeople.org/profiles/antonio-maria-cleani">PhilPeople</a>
        <span class="sep"> · </span>
        <a href="https://dornsife.usc.edu/phil/profile/antonio-maria-cleani/">USC</a>
      </div>
    </div>
  )
}) satisfies QuartzComponentConstructor

