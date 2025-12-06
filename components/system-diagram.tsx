export function SystemDiagram() {
  return (
    <section id="system" className="py-32 md:py-40 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <h2 className="font-serif text-[28px] md:text-[32px] leading-[1.4] text-[#0F172A] text-center mb-20">
          志望校合格までのロードマップ
        </h2>

        <div className="max-w-[600px] mx-auto">
          {/* ステップ1: 志望校入力 */}
          <div className="flex items-center mb-12">
            <div className="flex-shrink-0 w-12 h-12 rounded-full border border-[#1e3a8a] flex items-center justify-center font-mono text-[#1e3a8a] font-semibold">
              01
            </div>
            <div className="ml-6 flex-1">
              <h3 className="font-serif text-[20px] text-[#0F172A] mb-2">志望校入力</h3>
              <p className="text-[15px] text-[#475569] leading-relaxed">目標とする志望校を入力します</p>
            </div>
          </div>

          {/* 矢印 */}
          <div className="flex justify-center mb-12">
            <div className="w-[1px] h-12 bg-[#CBD5E1]"></div>
          </div>

          {/* ステップ2: AI分析 */}
          <div className="flex items-center mb-12">
            <div className="flex-shrink-0 w-12 h-12 rounded-full border border-[#1e3a8a] flex items-center justify-center font-mono text-[#1e3a8a] font-semibold">
              02
            </div>
            <div className="ml-6 flex-1">
              <h3 className="font-serif text-[20px] text-[#0F172A] mb-2">AI分析</h3>
              <p className="text-[15px] text-[#475569] leading-relaxed">現在の学力と志望校のギャップを分析</p>
            </div>
          </div>

          {/* 矢印 */}
          <div className="flex justify-center mb-12">
            <div className="w-[1px] h-12 bg-[#CBD5E1]"></div>
          </div>

          {/* ステップ3: 学習計画生成 */}
          <div className="flex items-center mb-12">
            <div className="flex-shrink-0 w-12 h-12 rounded-full border border-[#1e3a8a] flex items-center justify-center font-mono text-[#1e3a8a] font-semibold">
              03
            </div>
            <div className="ml-6 flex-1">
              <h3 className="font-serif text-[20px] text-[#0F172A] mb-2">学習計画生成</h3>
              <p className="text-[15px] text-[#475569] leading-relaxed">個別最適化された参考書を用いた学習計画をAIが自動生成</p>
            </div>
          </div>

          {/* サポート要素 */}
          <div className="bg-[#F8FAFC] p-8 mb-12 border-l-2 border-[#1e3a8a]">
            <div className="space-y-6">
              <div>
                <h4 className="font-serif text-[18px] text-[#0F172A] mb-2">独自のオンライン自習室</h4>
                <p className="text-[14px] text-[#475569] leading-relaxed">集中できる学習環境で計画を実行</p>
              </div>
              <div>
                <h4 className="font-serif text-[18px] text-[#0F172A] mb-2">人間による初回ヒアリング</h4>
                <p className="text-[14px] text-[#475569] leading-relaxed">現役　東大・早稲田・慶應生等教師陣とのやり取りで進捗確認と軌道修正</p>
              </div>
            </div>
          </div>

          {/* 矢印 */}
          <div className="flex justify-center mb-12">
            <div className="w-[1px] h-12 bg-[#CBD5E1]"></div>
          </div>

          {/* ゴール: 志望校合格 */}
          <div className="flex items-center">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1e3a8a] flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="ml-6 flex-1">
              <h3 className="font-serif text-[24px] text-[#1e3a8a] mb-2">志望校合格</h3>
              <p className="text-[15px] text-[#475569] leading-relaxed">目標達成まで伴走します</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
