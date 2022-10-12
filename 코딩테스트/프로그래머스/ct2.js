//최소 직사각형
function solution(sizes) {
    const newarr = sizes.map(([h,w]) => h>w?[h,w]:[w,h]);

    let maxSize = [0,0];
    newarr.forEach(([h,w]) => {
        if (h > maxSize[0]) maxSize[0]=h;
        if (w>maxSize[1]) maxSize[1]=w;
        });

    return maxSize[0]*maxSize[1];    
}