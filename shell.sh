for file in ~/Desktop/*.webm; do
    output="materials/$(basename "$file" .webm).mp4"
    ffmpeg -i "$file" "$output"
done
