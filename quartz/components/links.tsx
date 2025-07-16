import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { FullSlug, SimpleSlug, resolveRelative } from "../util/path"
import { QuartzPluginData } from "../plugins/vfile"
import { byDateAndAlphabetical } from "./PageList"
import style from "./styles/links.scss"
import { Date, getDate } from "./Date"
import { GlobalConfiguration } from "../cfg"

interface Options {
  title: string
}

const defaultOptions = (cfg: GlobalConfiguration): Options => ({
  title: "",
})

export default ((userOpts?: Partial<Options>) => {
  function Links({ allFiles, fileData, displayClass, cfg }: QuartzComponentProps) {
    const opts = { ...defaultOptions(cfg), ...userOpts }
    return (
      <div class={`links ${displayClass ?? ""}`}>
        <h3>{opts.title}</h3>
        <ul>
          <li>
            <h3 style={{marginTop: 0, marginBottom: 0}}><a href="/Research">Research</a></h3>
          </li>
          <li>
            <h3 style={{marginTop: 0, marginBottom: 0}}><a href="/Teaching">Teaching</a></h3>
          </li>
          <li>
            <h3 style={{marginTop: 0, marginBottom: 0}}><a href="/cv.pdf">CV</a></h3>
          </li>
        </ul>
      </div>
    )
  }

  Links.css = style
  return Links
}) satisfies QuartzComponentConstructor