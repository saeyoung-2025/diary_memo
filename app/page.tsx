'use client'

import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/dashboard`
      }
    })
    
    if (error) {
      console.error('Login error:', error)
      alert('로그인 중 오류가 발생했습니다.')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">📔</span>
              <h1 className="text-xl font-bold text-gray-900">내 일기와 할일</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">
                {new Date().toLocaleDateString('ko-KR', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric', 
                  weekday: 'long' 
                })}
              </span>
              <button 
                onClick={handleGoogleLogin}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center space-x-2"
              >
                <span>🔐</span>
                <span>Google 로그인</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-5xl font-bold text-gray-900 mb-6">
          오늘은 어떤 하루를 만들어볼까요? 🌟
        </h2>
        <p className="text-xl text-gray-600 mb-12">
          일기와 할일을 통해 더 나은 하루를 계획해보세요
        </p>
        
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center p-6 rounded-xl bg-blue-50">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">일기 작성</h3>
              <p className="text-gray-600">
                오늘의 소중한 순간들을 기록하고 감정을 표현해보세요
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-purple-50">
              <div className="text-6xl mb-4">✅</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">할일 관리</h3>
              <p className="text-gray-600">
                체계적인 할일 관리로 더 효율적인 하루를 만들어보세요
              </p>
            </div>
          </div>
        </div>

        <button 
          onClick={handleGoogleLogin}
          className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition shadow-lg flex items-center space-x-3 mx-auto"
        >
          <span>🔐</span>
          <span>Google로 시작하기</span>
        </button>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-lg font-semibold mb-2">강력한 검색</h3>
            <p className="text-gray-600">
              작성한 일기와 할일을 빠르게 찾아보세요
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-lg font-semibold mb-2">우선순위 관리</h3>
            <p className="text-gray-600">
              중요한 일부터 체계적으로 관리하세요
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-lg font-semibold mb-2">성과 추적</h3>
            <p className="text-gray-600">
              일일 성과를 확인하고 동기부여를 받으세요
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}