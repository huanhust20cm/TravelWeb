import React, { useState } from 'react';
import { useMultiRootEditor, MultiRootHookProps } from '@ckeditor/ckeditor5-react';
import MultiRootEditor from '@ckeditor/ckeditor5-build-multi-root';
import styles from './EditorNav.module.scss';

// Thiết lập các lớp CSS cho toolbar và editable elements
interface EditorData {
    content: string;
}

const Editor = () => {
    const [content, setContent] = useState<EditorData>({ content: '<p><img src="https://d1hjkbq40fs2x4.cloudfront.net/2016-01-31/files/1045.jpg" alt="5 Cách Đơn Giản Để Chụp Những Ảnh Đẹp Nhất của Thế Giới!" width="570" height="380"></p><p>&nbsp;</p><p>1123asdhasdjh acxnzczncbnmcbhcvxchvbhjxcvhjxcvbhxcvbhcvxhxchvjbxcjvhxhbcvh</p>' });
    const [submittedContent, setSubmittedContent] = useState<string>('');

    const editorProps: MultiRootHookProps = {
        editor: MultiRootEditor,
        data: content,
        config: {
            // Cấu hình trình soạn thảo của bạn
        }
    };

    const {
        editor,
        toolbarElement,
        editableElements,
        data,
        setData
    } = useMultiRootEditor(editorProps);

    const handleSubmit = () => {
        // Xử lý dữ liệu đã chỉnh sửa, ví dụ: gửi nó đến máy chủ hoặc xử lý nó theo cách khác
        console.log("Content submitted:", data);
        setSubmittedContent(data.content);
    };

    return (
        <div>
        <div className={styles.ckeditor__editable}>
            <h2>Using CKEditor&nbsp;5 multi-root build in React</h2>

            {/* Thiết kế style cho toolbarElement */}
            <div className={styles.toolbarClass}>
                {toolbarElement}
            </div>

            {/* Thiết kế style cho editableElements */}
            <div className={styles.editableElementsClass}>
                {editableElements}
            </div>

            <button onClick={handleSubmit}>Submit</button> {/* Nút submit */}
            
            {/* Hiển thị nội dung đã submit */}
            {submittedContent && (
                <div>
                    <h3>Submitted Content:</h3>
                    <div dangerouslySetInnerHTML={{ __html: submittedContent }} />
                </div>
            )}
        </div>
        </div>
    );
}

export default Editor;
