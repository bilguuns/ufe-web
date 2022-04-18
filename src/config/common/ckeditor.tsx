import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const CKEditorWrapper = (props: any) => (
    <CKEditor editor={ClassicEditor} {...props} />
);

export default CKEditorWrapper;
