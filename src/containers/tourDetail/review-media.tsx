// components/ReviewMedia.tsx
import React from 'react'

type File = {
  file_url: string
}

interface ReviewMediaProps {
  files: File[]
}

const ReviewMedia: React.FC<ReviewMediaProps> = ({ files }) => {
  if (!Array.isArray(files) || files.length === 0) return null

  return (
    <div className="mt-2 flex flex-wrap justify-start gap-2">
      {files.map((file, i) => {
        const url = file.file_url.trim()
        const isYouTube = url.includes('youtube.com') || url.includes('youtu.be')

        if (isYouTube) {
          const videoIdMatch = url.match(/(?:v=|\/)([0-9A-Za-z_-]{11})/)
          const videoId = videoIdMatch?.[1]

          return videoId ? (
            <iframe
              key={i}
              width="400"
              height="200"
              src={`https://www.youtube.com/embed/${videoId}`}
              title={`YouTube video ${i}`}
              className="rounded-md"
              allowFullScreen
            ></iframe>
          ) : null
        }

        return <img key={i} src={url} alt={`Attachment ${i}`} className="h-[200px] w-[399px] rounded-md object-cover" />
      })}
    </div>
  )
}

export default ReviewMedia
