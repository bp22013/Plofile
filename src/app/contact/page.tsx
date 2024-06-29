'use client';

import type { NextPage } from 'next';
import { Button, Input, Textarea } from '@nextui-org/react';

const Content: NextPage = () => {
  return (
    <div className="max-w-md mx-auto mt-4 p-6 rounded shadow-md">
      <h1 className="text-xl font-bold mb-8 text-center">お問い合わせフォーム</h1>
      <form action={process.env.NEXT_PUBLIC_NEWT_FORM_ENDPOINT} method="post">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-center">お名前</label>
          <Input type="text" id="name" name="name" required className="mt-1 mb-6 p-2 w-full border rounded-md" />
          <label htmlFor="email" className="block text-sm font-medium text-center">メールアドレス</label>
          <Input type="email" id="email" name="email" required className="mt-1 mb-6 p-2 w-full border rounded-md" />
          <label htmlFor="message" className="block text-sm font-medium text-center">お問い合わせ内容</label>
          <Textarea id="message" name="message" required className="mt-1 mb-8 p-2 w-full border rounded-md" rows={3}></Textarea>
          <div className="flex justify-center">
            <Button type="submit" className="px-8 py-2 rounded bg-blue-600 forground text-white">
              送信
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Content;
