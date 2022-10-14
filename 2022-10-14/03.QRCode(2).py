import qrcode

with open('siteList.txt','r',encoding='UTF8') as f:
    read_lines = f.readlines()

    for line in read_lines:
        line = line.strip()

        qr_data = line
        qr_img = qrcode.make(qr_data)

        qr_img.save(qr_data + '.png')