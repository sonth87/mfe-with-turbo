export type LanguageType = {
  _id: string;
  root_id: string;
  parent_id: string;
  key_group: string;
  description: string;
  create_date: string;
  content_lang: LanguageType | LanguageType[];
  children: LanguageType[];
};
