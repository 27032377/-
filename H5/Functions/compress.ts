interface Ifile extends Blob {
    name: string,
    type: string,
    [propname: string]: any
}

interface IcompressOpt {
    file: Ifile,
    quality: number,
    size: number,
    fn: (res: object) => void,
    [propName: string]: any
}

export default class Compress {
    // input[type='file'].file[0]
    public file: Ifile;
    // 默认压缩质量
    public needQuality: number = 0.7;
    // 理想压缩后的尺寸
    public needSize: number = 4 * 1024 * 1024
    // 图片信息
    public imgState: any = {};
    // 返回信息
    public needRes = {}
    // 执行完的回调
    public callback: (res: object) => void
    constructor (props: IcompressOpt) {
        const {
            quality,
            file,
            size,
            fn
        } = props
        this.imgState = {
            fileName: file.name,
            type: file.type
        }
        this.file = file
        this.needSize = size
        this.needQuality = quality
        this.callback = fn
    };
    public readFile () {
        const fr = new FileReader();
        console.log(this.file.size);
        fr.readAsDataURL(this.file);
        fr.onload = () => {
            console.log('================')
            this.compress(fr.result);
            // let size = this.file.size
            // if (size > this.needSize) {
            //     this.compress(result)
            // }
        }
    };
    public compress (url: any) {
        const img = new Image();
        img.src = url;
        const canvas = document.createElement('canvas');
        const ctx: any = canvas.getContext('2d');
        img.onload = () => {
            console.log('xxxxxxxxxxxxx')
            const width = img.width;
            const height = img.height;
            const scale = width / height;
            canvas.width = width * this.needQuality;
            canvas.height = height * this.needQuality;
            ctx.drawImage(img, 0, 0, width, height);
            const base64 = canvas.toDataURL(this.imgState.type, 0.5);
            console.log(base64.length);
            this.needRes = {
                name: this.imgState.fileName,
                value: base64
            }
            this.callback(this.needRes)
        }
    }
}
