import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Antonio Maria Cleani",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "amcleani.github.io",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "rgba(22, 22, 24, 1)",
          lightgray: "#393639",
          gray: "#646464",
          darkgray: "#d4d4d4",
          dark: "#ebebec",
          secondary: "rgba(0, 255, 255, 0.9)",
          tertiary: "rgba(132, 165, 157, 1)",
          highlight: "rgba(22, 22, 24, 0)",
          textHighlight: "#b3aa0288",
        },
        darkMode: {
          light: "rgba(22, 22, 24, 1)",
          lightgray: "#393639",
          gray: "#646464",
          darkgray: "#d4d4d4",
          dark: "#ebebec",
          secondary: "rgba(0, 255, 255, 0.9)",
          tertiary: "rgba(132, 165, 157, 1)",
          highlight: "rgba(22, 22, 24, 0)",
          textHighlight: "#b3aa0288",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ 
        renderEngine: "katex", 
        customMacros: {
            "\\sometimes": "S",
  "\\fulllanguage": "\\mathcal{L}_+",
  "\\genlanguage": "\\mathcal{L}_\\dagger",
  "\\boxfree": "\\mathcal{L}_\\star",
  "\\ortholanguage": "\\mathcal{L}_0",
  "\\thelanguage": "\\mathcal{L}_\\heartsuit",
  "\\fulllogic": "\\mathtt{#1}_+",
  "\\genlogic": "\\mathtt{#1}_\\dagger",
  "\\boxfreelogic": "\\mathtt{#1}_\\star",
  "\\orthologic": "\\mathtt{#1}_0",
  "\\thelogic": "\\mathtt{#1}_\\heartsuit",
  "\\app": "\\mathit{App}",
  "\\obj": "\\mathbf{#1}",
  "\\struc": "\\mathfrak{#1}",
  "\\class": "\\mathsf{#1}",
  "\\logic": "\\mathtt{#1}",
  "\\int": "\\llbracket #2 \\rrbracket^{#1}",
  "\\propseq": "\\mathbf{\\bar{#1}}",
  "\\trmseq": "\\bar{#1}",
  "\\at": "\\mathsf{At}",
  "\\stab": "\\mathsf{Stab}",
  "\\supp": "\\mathsf{Supp}",
  "\\ex": "\\mathsf{E!}",
  "\\mergetm": "\\bar{#1} \\bullet \\bar{#2}",
  "\\exmergetm": "\\bar{#1} \\star \\bar{#2}",
  "\\mergedom": "\\mathbf{\\bar{#1}} \\bullet \\mathbf{\\bar{#2}}",
  "\\exmergedom": "\\mathbf{\\bar{#1}} \\bullet \\mathbf{\\bar{#2}}",
  "\\somedom": "\\blacklozenge",
  "\\alldom": "\\blacksquare",
  "\\sub": "i_{\\mathbf{\\bar{#1}}}",
  "\\subfin": "i_{\\xi\\mathbf{\\bar{#1}}}",
  "\\subone": "i_{\\mathbf{#1}}",
  "\\subtm": "i_{[\\bar{#1}]}",
  "\\subtmfin": "i_{\\xi[\\bar{#1}]}",
  "\\subint": "i_{\\llbracket \\bar{#1} \\rrbracket^{g}}",
  "\\subintinf": "i_{\\llbracket \\bar{#1} \\rrbracket^{g}}",
  "\\subintone": "i_{\\xi\\llbracket #1 \\rrbracket^{g}}",
  "\\subfree": "i_{#1}",
  "\\wsupp": "\\mathsf{WSupp}",
  "\\atcap": "\\mathsf{At}^{\\cap}",
  "\\atcup": "\\mathsf{At}^{\\cup}",
  "\\exwsupp": "\\mathsf{WSupp}_{\\exists}",
  "\\uniwsupp": "\\mathsf{WSupp}_{\\forall}",
  "\\exsupp": "\\mathsf{Supp}_{\\exists}",
  "\\unisupp": "\\mathsf{Supp}_{\\forall}"
        } 
      }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
