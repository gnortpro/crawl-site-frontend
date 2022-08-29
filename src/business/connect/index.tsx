import React, { FC, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import Link from 'next/link';
import { useRouter } from 'next/router';

import axios from 'axios';
import { Button } from 'component/button';
import { Field } from 'component/field';
import { FormItem } from 'component/formItem';
import nextBase64 from 'next-base64';

export const ConnectComponent: FC = () => {
  const methods = useForm();
  const router = useRouter();
  const { query } = router;
  const { token } = query;

  const { register, reset, errors } = methods;

  const [shopName, setShopName] = useState('')
  const [siteUrl, setSiteUrl] = useState('')
  const [siteToken, setSiteToken] = useState('')

  //   const decodeToken = nextBase64.decode(token as string);

  //   console.log('decodeToken', decodeToken);
  const onIntegrate = () => {
    axios.post(
      'http://localhost:5001/switch-store',
      {
        shopName,
        siteUrl,
        siteToken,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  };

  useEffect(() => {
    if (token) {
      const decodeToken = nextBase64.decode(token as string);
      const splitToken = decodeToken.split('|');
      console.log('token', splitToken[1]);
      setShopName(splitToken[2])
      setSiteUrl(splitToken[0])
      setSiteToken(splitToken[1])
      reset({
        shopName: splitToken[2],
        siteUrl: splitToken[0],
      });
    }
  }, [token, reset]);

  return (
    <div className="min-h-screen h-full flex flex-col after:flex-1 bg-slate-200">
      <div className="max-w-sm mx-auto px-4 py-8 mt-14 shadow bg-white rounded-lg">
        <div className="text-center">
          <div className="text-xl text-indigo-500 font-bold mb-3">Connect My Shop</div>
          <div className="text-sm text-gray-400">Please check your shop info in form below to start integration.</div>
        </div>
        {/* Form */}
        <form>
          <div className="space-y-4">
            <FormItem label="Shop name">
              <Field.Text ref={register} name="shopName" />
            </FormItem>
            <FormItem label="Site URL">
              <Field.Text ref={register} name="siteUrl" readOnly />
            </FormItem>
          </div>
        </form>
        {/* Footer */}
        <div className="pt-5 flex gap-2 items-center justify-end">
          <Button.Fill color="primary" onClick={onIntegrate}>
            Integrate now
          </Button.Fill>
          <Button.Text>Cancel</Button.Text>
        </div>
      </div>
    </div>
  );
};
