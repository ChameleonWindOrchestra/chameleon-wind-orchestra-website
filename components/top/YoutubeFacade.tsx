"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  videoId: string;
  title?: string;
};

// サムネイル → クリックで iframe を読み込むファサード方式。
// 初期表示で重い YouTube iframe を読み込まず、ページ表示を軽く保つ。
// 再生時はプライバシー強化モード(youtube-nocookie.com)で埋め込む。
export function YoutubeFacade({ videoId, title = "YouTube 動画" }: Props) {
  const [playing, setPlaying] = useState(false);
  // 高画質(1280x720)を優先し、その画質が存在しない動画のみ hqdefault に落とす
  const [thumb, setThumb] = useState(
    `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`,
  );

  if (playing) {
    const src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`;
    return (
      <iframe
        src={src}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 h-full w-full border-0"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`${title}を再生`}
      className="group absolute inset-0 h-full w-full cursor-pointer border-0 p-0"
    >
      <Image
        src={thumb}
        alt=""
        fill
        sizes="(max-width: 768px) 100vw, 800px"
        className="object-cover"
        onError={() =>
          setThumb(`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`)
        }
      />
      <span className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/30">
        <span className="flex h-20 w-20 items-center justify-center rounded-full bg-accent shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="#fff">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </span>
    </button>
  );
}
