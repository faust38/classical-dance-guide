import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Классика",
    pageTitleSuffix: " | Классический танец",
    enableSPA: false,
    enablePopovers: true,
    analytics: null,
    locale: "ru-RU",
    baseUrl: "https://faust38.github.io/classical-dance-guide",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "none",
      cdnCaching: true,
      defaultTheme: "dark",
      typography: {
        header: "Georgia, Times New Roman, serif",
        body: "Georgia, Times New Roman, serif",
        code: "Courier New, monospace",
      },
      
      colors: {
        lightMode: {
          light: "#faf8f8",
          lightgray: "#e5e5e5",
          gray: "#b8b8b8",
          darkgray: "#4e4e4e",
          dark: "#2b2b2b",
          secondary: "#284b63",
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#fff23688",
        },
        darkMode: {
          light: "#2e261f",           // основной фон
          lightgray: "#26211c",       // фон боковой панели
          gray: "#676c59",            // границы, номера
          darkgray: "#ab8f68",        // текст в боковой панели (ОСТАВЛЯЕМ)
          dark: "#ebcc96",            // ОСНОВНОЙ ТЕКСТ (ОБНОВЛЕНО)
          secondary: "#e5aa1f",       // ссылки
          tertiary: "#44add1",        // курсив (оставляем голубой)
          highlight: "rgba(243, 80, 68, 0.3)",
          textHighlight: "#ff7847",   // ВЫДЕЛЕНИЯ **текст** (ОБНОВЛЕНО)
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
          dark: "one-dark-pro",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
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
    ],
  },
}

export default config
