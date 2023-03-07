import axios from "axios";
import { LanguageType } from "../types/language";

// eslint-disable-next-line turbo/no-undeclared-env-vars
const lang_api = process.env.NEXT_PUBLIC_LANGUAGE;

export const getTranslationByPage = async (
  pageId: string,
  language: string
) => {
  const params = {
    id: pageId,
    locate: language,
  };

  const result = await axios({
    method: "get",
    url: lang_api + "/api/get-data-node",
    params: params,
  });

  return result?.data?.data as LanguageType;
};
