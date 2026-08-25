// src/index.tsx
import { pathToRoot } from "@quartz-community/utils/path";
import { jsx, jsxs } from "preact/jsx-runtime";
var ResearchLinks = () => {
  const Component = ({ fileData }) => {
    const baseDir = pathToRoot(fileData.slug);
    const links = [
      ["Research", "research"],
      ["Teaching", "teaching"],
      ["CV", "CV.pdf"],
      ["Database", "database"]
    ];
    return /* @__PURE__ */ jsxs("div", { class: "research-links", children: [
      /* @__PURE__ */ jsxs("address", { class: "research-contact", "aria-label": "Contact information", children: [
        /* @__PURE__ */ jsx("span", { children: "University of Southern California" }),
        /* @__PURE__ */ jsxs("span", { class: "research-contact__links", children: [
          /* @__PURE__ */ jsx("a", { href: "mailto:cleani@usc.edu", children: "cleani@usc.edu" }),
          /* @__PURE__ */ jsx("span", { "aria-hidden": "true", children: "\u2002\xB7\u2002" }),
          /* @__PURE__ */ jsx("a", { href: "https://philpeople.org/profiles/antonio-maria-cleani", children: "PhilPeople" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("nav", { class: "research-navigation", "aria-label": "Site links", children: links.map(([label, path]) => /* @__PURE__ */ jsx("a", { href: `${baseDir}/${path}`, class: "research-links__link", children: label })) })
    ] });
  };
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
  `;
  return Component;
};
var src_default = ResearchLinks;

export {
  ResearchLinks,
  src_default
};
//# sourceMappingURL=chunk-G6LTFUN4.js.map