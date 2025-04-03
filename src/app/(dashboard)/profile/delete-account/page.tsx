import DeleteAccountModal from './delete-account-modal'
import { AlertCircle } from 'lucide-react'

export default function DeleteAccountPage() {
  return (
    <div className="container mx-auto max-w-md py-8">
      <div className="rounded-lg bg-white p-6 shadow">
        <h1 className="mb-4 flex items-center gap-2 text-xl font-bold">
          <span className="text-red-500">🗑️</span> XÓA TÀI KHOẢN
        </h1>

        <div className="border-t pt-4">
          <p className="mb-4 text-red-500">Cảnh báo: Hành động này không thể hoàn tác.</p>

          <div className="mb-6 rounded-md border border-red-200 bg-red-50 p-4">
            <div className="flex gap-2">
              <AlertCircle className="h-5 w-5 flex-shrink-0 text-red-500" />
              <p className="text-sm text-red-600">
                Việc xóa tài khoản sẽ xóa vĩnh viễn tất cả dữ liệu của bạn và bạn sẽ không thể khôi phục lại.
              </p>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="mb-2 font-medium">Hậu quả của việc xóa tài khoản:</h2>
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
