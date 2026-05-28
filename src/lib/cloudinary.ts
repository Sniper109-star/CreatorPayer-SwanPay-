// Cloudinary upload utility
export class CloudinaryClient {
  private cloudName: string;
  private uploadPreset: string;

  constructor() {
    this.cloudName = process.env.CLOUDINARY_CLOUD_NAME || '';
    this.uploadPreset = process.env.CLOUDINARY_UPLOAD_PRESET || '';
  }

  async uploadImage(file: File, folder = 'creators'): Promise<string> {
    const form = new FormData();
    form.append('file', file);
    form.append('upload_preset', this.uploadPreset);
    form.append('folder', folder);

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${this.cloudName}/image/upload`,
      { method: 'POST', body: form }
    );

    const data = await response.json();
    return data.secure_url;
  }

  getImageUrl(publicId: string, options?: { width?: number; height?: number; crop?: string }) {
    if (!options) return `https://res.cloudinary.com/${this.cloudName}/image/upload/${publicId}`;
    
    const transforms = [];
    if (options.width) transforms.push(`w_${options.width}`);
    if (options.height) transforms.push(`h_${options.height}`);
    if (options.crop) transforms.push(`c_${options.crop}`);

    return `https://res.cloudinary.com/${this.cloudName}/image/upload/${transforms.join(',')}/${publicId}`;
  }
}

export const cloudinary = new CloudinaryClient();