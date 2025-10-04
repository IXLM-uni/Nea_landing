import { Button } from "@/components/ui/button"

export function FixedBottomButton() {
  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <a href="https://t.me/NewEmploymentAdvisorBot" target="_blank" rel="noopener noreferrer">
        <Button 
          size="lg" 
          className="bg-[#305869] hover:bg-[#305869] text-white px-8 py-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_#305869]"
        >
          Пройти тестирование
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeWidth="1.7"
              d="M10 7a3 3 0 1 0-6 0 3 3 0 0 0 6 0Zm0 10a3 3 0 1 0-6 0 3 3 0 0 0 6 0ZM20 7a3 3 0 1 0-6 0 3 3 0 0 0 6 0Zm0 10a3 3 0 1 0-6 0 3 3 0 0 0 6 0Z"
            />
          </svg>
        </Button>
      </a>
    </div>
  )
}
