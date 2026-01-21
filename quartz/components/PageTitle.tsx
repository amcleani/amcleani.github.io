import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)

  return (
    <div class={classNames(displayClass, "page-title-block")}>
      <h2 class="page-title">
        <a href={baseDir}>{title}</a>
      </h2>

      <div class="contact-lines">
        <div class="line">
          <a href="mailto:cleani@usc.edu">cleani@usc.edu</a>
        </div>

      </div>
    </div>
  )
}

PageTitle.css = `
.page-title {
  font-size: 1.75rem;
  margin: 0;
  font-family: var(--titleFont);
}

.page-title-block {
  margin: 0;
}

.contact-lines {
  font-size: 1rem;
  color: var(--gray);
  line-height: 1.6rem; /* matches body text */
  margin-top: 0.4rem; /* gentle spacing below title */
}

.contact-lines .line {
  margin: 0;
  padding: 0;
}

.sep {
  margin: 0 0.3rem;
  color: var(--gray);
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
