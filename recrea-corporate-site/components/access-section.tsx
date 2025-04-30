export default function AccessSection() {
  return (
    <section id="access" className="py-16 bg-black border-t border-[#F2F2F2]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#EDE3BF]">アクセス</h2>

        <div className="max-w-4xl mx-auto">
          <div className="aspect-w-16 aspect-h-9 mb-6 relative h-[450px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.6261422410316!2d139.7201863!3d35.6255079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b1f5f55c4eb%3A0x3c8b8ebe6e5d5f!2z44CSMTQxLTAwMzEg5p2x5Lqs6YO95ZOB5bed5Yy65YyX5LqV5Y-N55Sw77yX5LiB55uu77yR77yT4oiS77yVIERLIOS6lOWPjeWcsOeUujQwNw!5e0!3m2!1sja!2sjp!4v1743236500!5m2!1sja!2sjp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="株式会社リ・クリエ所在地"
              className="absolute inset-0"
            ></iframe>
          </div>

          <div className="text-white text-center mb-6">
            <p>東京都品川区西五反田7-13-5 DK五反田407</p>
          </div>

          <div className="text-center">
            <a
              href="https://maps.google.com/?q=東京都品川区西五反田7-13-5"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D0A25A] hover:underline"
            >
              Googleマップで開く
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

