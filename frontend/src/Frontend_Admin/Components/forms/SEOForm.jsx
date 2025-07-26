import React from "react";
import { InputFields, RichTextInputEditor_V2 } from "./FormFields";
import Information from "../../../Common/info";

function SEOForm({ Controller, control, register, onChangeHanlder }) {
  return (
    <>
      <InputFields
        key={2}
        label={"Title"}
        type={"text"}
        fieldName={"seo_title"}
        register={register}
        onChange={onChangeHanlder}
      />
      <Information info="Meta title tags should be between 50 to 60 characters long" cssClass="text-secondary" />
      
      <InputFields
        key={3}
        label={"Link"}
        type={"text"}
        fieldName={"seo_link"}
        register={register}
        onChange={onChangeHanlder}
      />
      <InputFields
        key={4}
        label={"Author"}
        type={"text"}
        fieldName={"seo_author"}
        register={register}
        onChange={onChangeHanlder}
      />
      {/* <RichTextInputEditor_V2
        Controller={Controller}
        control={control}
        label={"Keywords"}
        name={"seo_keywords"}
      />
      <RichTextInputEditor_V2
        Controller={Controller}
        control={control}
        label={"Description"}
        name={"seo_description"}
      /> */}
      <Information info="Meta description character limit between 150-160" cssClass="text-secondary" />
      <InputFields
        key={5}
        label={"Keywords"}
        type={"textarea"}
        fieldName={"seo_keywords"}
        register={register}
        onChange={onChangeHanlder}
      />
      <InputFields
        key={6}
        label={"Description"}
        type={"textarea"}
        fieldName={"seo_description"}
        register={register}
        onChange={onChangeHanlder}
      />
    </>
  );
}

export default SEOForm;
