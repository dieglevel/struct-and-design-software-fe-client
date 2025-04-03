import DeleteAccountModal from "./delete-account-modal"
import { AlertCircle } from "lucide-react"

export default function DeleteAccountPage() {
  return (
    <div className="container mx-auto py-8 max-w-md">
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-xl font-bold mb-4 flex items-center gap-2">
          <span className="text-red-500">🗑️</span> XÓA TÀI KHOẢN
        </h1>

        <div className="border-t pt-4">
          <p className="text-red-500 mb-4">Cảnh báo: Hành động này không thể hoàn tác.</p>

          <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-6">
            <div className="flex gap-2">
              <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
              <p className="text-red-600 text-sm">
                Việc xóa tài khoản sẽ xóa vĩnh viễn tất cả dữ liệu của bạn và bạn sẽ không thể khôi phục lại.
              </p>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="font-medium mb-2">Hậu quả của việc xóa tài khoản:</h2>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <input type="checkbox" id="confirm1" className="mt-1" />
                <label htmlFor="confirm1" className="text-sm">
                  Tôi hiểu rằng tất cả dữ liệu cá nhân, lịch sử hoạt động và tài liệu của tôi sẽ bị xóa vĩnh viễn.
                </label>
              </div>
              <div className="flex items-start gap-2">
                <input type="checkbox" id="confirm2" className="mt-1" />
                <label htmlFor="confirm2" className="text-sm">
                  Tôi hiểu rằng tất cả các đăng ký và thanh toán định kỳ sẽ bị hủy.
                </label>
              </div>
              <div className="flex items-start gap-2">
                <input type="checkbox" id="confirm3" className="mt-1" />
                <label htmlFor="confirm3" className="text-sm">
                  Tôi hiểu rằng hành động này là vĩnh viễn và không thể hoàn tác.
                </label>
              </div>
            </div>
          </div>

          {/* Replace the form with the modal trigger */}
          <DeleteAccountModal />
        </div>
      </div>
    </div>
  )
}

