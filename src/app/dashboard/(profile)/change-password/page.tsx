"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PasswordInput } from "../components";


export default function ChangePassword() {
  const [showPasswords, setShowPasswords] = useState({
    oldPass: false,
    newPass: false,
    rewriteNewPass: false,
  });

  const [formData, setFormData] = useState({
    oldPass: "",
    newPass: "",
    rewriteNewPass: "",
  });

  const togglePassword = (fieldName: 'oldPass' | 'newPass' | 'rewriteNewPass') => {
    setShowPasswords((prev) => ({
      ...prev,
      [fieldName]: !prev[fieldName],
    }));
  };

  return (
    <div className="w-full max-w-4xl lg:w-[896] self-center p-6 rounded-lg flex-1">
      <h2 className="text-xl font-bold text-[#0a3b66] mb-6 pb-2 border-b uppercase">
        Đổi mật khẩu
      </h2>
      <form className="space-y-6 w-full">
        <div className="grid grid-cols-1 gap-6">
          <PasswordInput
            label="Mật khẩu cũ"
            fieldName="oldPass"
            value={formData.oldPass}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormData({ ...formData, oldPass: e.target.value })
            }
            show={showPasswords.oldPass}
            onToggle={() => togglePassword("oldPass")}
          />
          <PasswordInput
            label="Mật khẩu mới"
            fieldName="newPass"
            value={formData.newPass}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormData({ ...formData, newPass: e.target.value })
            }
            show={showPasswords.newPass}
            onToggle={() => togglePassword("newPass")}
          />
          <PasswordInput
            label="Nhập lại mật khẩu"
            fieldName="rewriteNewPass"
            value={formData.rewriteNewPass}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormData({ ...formData, rewriteNewPass: e.target.value })
            }
            show={showPasswords.rewriteNewPass}
            onToggle={() => togglePassword("rewriteNewPass")}
          />
        </div>

        <div className="flex justify-end">
          <Button
            type="submit"
            className="bg-[#ee7762] hover:bg-[#e06652] text-white px-8"
          >
            Cập nhật
          </Button>
        </div>
      </form>
    </div>
  );
}
