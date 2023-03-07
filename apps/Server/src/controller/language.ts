import { getTranslationByPage } from "../api/language";
import { LanguageType } from "../types/language";

const LANG_ACCEPT = ["vi", "en", "kr"];
const LANG_DEFAULT = "vi";

/**
 * Generate object
 * @param data
 * @returns
 */
const convertDataContent = (data: LanguageType) => {
  if (!data) return null;
  let language_content: any = {};

  const content_lang = data?.content_lang;
  const node_children = data?.children;
  const key_group = data?.key_group;

  if (!key_group) return;

  // Get Content lang
  if (content_lang && Array.isArray(content_lang) && content_lang.length > 0) {
    const content = content_lang?.reduce((obj, item) => {
      const key = Object.keys(item)[0];
      const value = Object.values(item)[0];
      return Object.assign(obj, { [key]: value });
    }, {});

    language_content = Object.assign({}, content);
  }

  // Get Node children
  if (node_children && node_children.length > 0) {
    for (let children = 0; children <= node_children.length - 1; children++) {
      const key = node_children[children].key_group;
      const childData = convertDataContent(node_children[children]);

      language_content[key] = childData;
    }
  }

  return language_content;
};

export const getTranslation = async (req: any, res: any) => {
  try {
    let language = await req.params.lang;
    const pageId = await req.params.pageId;

    if (language && pageId) {
      if (!LANG_ACCEPT.includes(language)) language = LANG_DEFAULT;
      const content = await getTranslationByPage(pageId, language);

      const data = convertDataContent(content);
      res.send({ data_language: data });
    } else {
      res.send(null);
    }
  } catch (error) {
    res.status(404).json({ message: "error" });
  }
};
