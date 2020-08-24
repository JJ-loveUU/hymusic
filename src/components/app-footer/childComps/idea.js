import React, { useState } from 'react';
import { Button, Modal, Form, Input } from 'antd';

const { TextArea } = Input;
const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {



    const [form] = Form.useForm();
    return (
        <Modal
            footer={
                <div style={{ textAlign: "center" }}>
                    <Button type="primary" shape="round" onClick={() => {
                        form
                            .validateFields()
                            .then(values => {
                                form.resetFields();
                                onCreate(values);
                            })
                            .catch(info => {
                                console.log('验证失败:', info);
                            });
                    }}>发送意见</Button>

                    <Button shape="round" onClick={onCancel}>取 消</Button>
                </div>
            }
            visible={visible}
            title="意见反馈"
            destroyOnClose={true}
            onCancel={onCancel}
        >
            <Form
                form={form}
                layout="vertical"
                name="form_in_modal"
                hideRequiredMark={true}
            >
                <Form.Item
                    name="title"
                    label="任何产品中的问题，欢迎反馈给我们"
                    rules={[
                        {
                            required: true,
                            message: '反馈内容不能为空!',
                        },
                    ]}
                >
                    <TextArea placeholder="请输入反馈内容" rows={5} />
                </Form.Item>
                <Form.Item
                    name="contact"
                >
                    <TextArea placeholder="请留下联系方式（电话、QQ、邮箱）" rows={3} />
                </Form.Item>
            </Form>
        </Modal>
    );
};

const CollectionsPage = () => {
    const [visible, setVisible] = useState(false);

    const onCreate = values => {
        console.log('Received values of form: ', values);
        setVisible(false);
    };

    return (
        <>
            <a href="jascript:void(0)"
                onClick={() => {
                    setVisible(true);
                }}
            >
                意见反馈
        </a>
            <CollectionCreateForm
                visible={visible}
                onCreate={onCreate}
                onCancel={() => {
                    setVisible(false);
                }}
            />
        </>
    );
};


export default CollectionsPage;