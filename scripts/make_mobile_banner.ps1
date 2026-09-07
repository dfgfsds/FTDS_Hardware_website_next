Add-Type -AssemblyName System.Drawing
$srcPath = Join-Path (Get-Location) 'public/assets/banners/FTDS WEB BANNER 01.jpg.jpeg'
$destPath = Join-Path (Get-Location) 'public/assets/banners/FTDS MOBILE BANNER 01.jpg.jpeg'

$src = [System.Drawing.Image]::FromFile($srcPath)
$dest = New-Object System.Drawing.Bitmap 435, 480
$g = [System.Drawing.Graphics]::FromImage($dest)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$g.Clear([System.Drawing.Color]::White)

# 1. Top left logo, heading, text and 4 feature icons (x: 40..770, y: 15..450)
$srcRect1 = New-Object System.Drawing.Rectangle 40, 15, 730, 435
$destRect1 = New-Object System.Drawing.Rectangle 10, 10, 415, 230
$g.DrawImage($src, $destRect1, $srcRect1, [System.Drawing.GraphicsUnit]::Pixel)

# 2. Devices (Laptops, PC and Monitor) (x: 740..1580, y: 140..520)
$srcRect2 = New-Object System.Drawing.Rectangle 740, 140, 840, 380
$destRect2 = New-Object System.Drawing.Rectangle 10, 240, 415, 185
$g.DrawImage($src, $destRect2, $srcRect2, [System.Drawing.GraphicsUnit]::Pixel)

# 3. Brand logos (Dell, HP, Lenovo, Acer, Asus) (x: 840..1270, y: 45..100)
$srcRect3 = New-Object System.Drawing.Rectangle 840, 45, 430, 55
$destRect3 = New-Object System.Drawing.Rectangle 25, 432, 385, 40
$g.DrawImage($src, $destRect3, $srcRect3, [System.Drawing.GraphicsUnit]::Pixel)

$g.Dispose()
$dest.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Jpeg)
$dest.Dispose()
$src.Dispose()
Write-Output "Perfected $destPath successfully"
