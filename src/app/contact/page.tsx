'use client';

import type { NextPage } from 'next';
import React from 'react';
import { Button, Input, Textarea, Modal, ModalContent, ModalBody, useDisclosure } from '@nextui-org/react';

const Content: NextPage = () => {

    const {isOpen, onOpen, onOpenChange} = useDisclosure();
  
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const form = event.currentTarget;
      
      setTimeout(() => {
        form.submit();
        onclose;
      }, 3000);
    }

  return (
    <div className="max-w-md mx-auto mt-4 p-6 rounded shadow-md">
      <h1 className="text-xl font-bold mb-8 text-center">お問い合わせフォーム</h1>
      <form onSubmit={handleSubmit} action={process.env.NEXT_PUBLIC_NEWT_FORM_ENDPOINT} method="post">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-center">お名前</label>
          <Input type="text" id="name" name="name" required className="mt-1 mb-6 p-2 w-full border rounded-md" />
          <label htmlFor="email" className="block text-sm font-medium text-center">メールアドレス</label>
          <Input type="email" id="email" name="email" required className="mt-1 mb-6 p-2 w-full border rounded-md" />
          <label htmlFor="message" className="block text-sm font-medium text-center">お問い合わせ内容</label>
          <Textarea id="message" name="message" required className="mt-1 mb-8 p-2 w-full border rounded-md" rows={3}></Textarea>
          <div className="flex justify-center">
            <Button type="submit" className="px-8 py-2 rounded bg-blue-600 forground text-white" onPress={onOpen}>
              送信
            </Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement='top-center' backdrop="blur" size='full' className='bg-green-300'>
              <ModalContent>
                <ModalBody>
                  <div className="mb-10 text-xl font-bold text-center text-black text-6xl flex justify-center">お問い合わせ完了しました。</div>
                </ModalBody>
              </ModalContent>
            </Modal>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Content;
