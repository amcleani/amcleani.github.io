import type { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "@quartz-community/types"
import { pathToRoot } from "@quartz-community/utils/path"

const ResearchLinks: QuartzComponentConstructor = () => {
  const Component: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
    const baseDir = pathToRoot(fileData.slug!)
    const links = [
      ["Research", "research"],
      ["Teaching", "teaching"],
      ["CV", "cv.pdf"],
      ["Database", "database"],
    ] as const

    return (
      <div class="research-links">
        <address class="research-contact" aria-label="Contact information">
          <span>University of Southern California</span>
          <span class="research-contact__links">
            <a href="mailto:cleani@usc.edu">cleani@usc.edu</a>
            <span aria-hidden="true">&ensp;·&ensp;</span>
            <a href="https://philpeople.org/profiles/antonio-maria-cleani">PhilPeople</a>
          </span>
        </address>
        <nav class="research-navigation" aria-label="Site links">
          {links.map(([label, path]) => (
            <a href={`${baseDir}/${path}`} class="research-links__link">
              {label}
            </a>
          ))}
        </nav>
      </div>
    )
  }

  Component.css = `
    .research-links {
      margin-top: 0.5rem;
    }

    .research-contact {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
      margin: 0 0 1.5rem;
      font-size: 1rem;
      line-height: 1.4;
      font-style: normal;
    }

    .research-contact__links {
      display: inline-flex;
      align-items: baseline;
      gap: 0;
    }

    .research-navigation {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .research-links__link {
      display: block;
      font-size: 1.75rem !important;
      line-height: normal;
      font-family: var(--titleFont);
      font-weight: 700 !important;
      text-decoration: none;
    }
  `

  return Component
}

export { ResearchLinks }
export default ResearchLinks
