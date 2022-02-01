from abc import abstractmethod, ABC
 
class JenisKapal(ABC):
    def __init__(self):
        print ("Data Kapal Baru")
    @abstractmethod
    def data_kapal(self,nama:str,ukuran:str):
        pass

class PerahuMotor(JenisKapal):
    def data_kapal(self,nama:str,ukuran:str):
        jenis = 'Perahu Motor'
        data = [nama,ukuran,jenis]  
        print("Nama kapal :{}, Ukuran kapal :{}, Jenis kapal : {}".format(nama,ukuran,jenis)) 
        return data 
    
class PerahuLayar(JenisKapal):
    def data_kapal(self,nama:str,ukuran:str):
        jenis = 'Perahu Layar'
        data = [nama,ukuran,jenis]  
        print("Nama kapal :{}, Ukuran kapal :{}, Jenis kapal : {}".format(nama,ukuran,jenis))  
        return data

class KapalPesiar(JenisKapal):
    def data_kapal(self,nama:str,ukuran:str):
        jenis = 'Kapal Pesiar'
        data = [nama,ukuran,jenis]  
        print("Nama kapal :{}, Ukuran kapal :{}, Jenis kapal : {}".format(nama,ukuran,jenis))  
        return data

if __name__ == "__main__":
    semua_kapal = []
    kapal_pesiar = KapalPesiar()
    a = kapal_pesiar.data_kapal('D-12','Besar')
    perahu_layar = PerahuLayar()
    b = perahu_layar.data_kapal('D-13','Sedang')
    perahu_motor = PerahuMotor()
    c = perahu_motor.data_kapal('D-14','Kecil')
    semua_kapal.append(a)
    semua_kapal.append(b)
    semua_kapal.append(c)
    print("Data kapal tersimpan : \n {}".format(semua_kapal))

    