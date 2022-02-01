#main ShoppingCart Class

class ShoppingCart(object):
    def __init__(self):
        self.barang = dict()

    def tambahProduk(self,kodeProduk:str,kuantitas:int):
        
        if kodeProduk in self.barang:
            self.barang[kodeProduk] += kuantitas 
        else:
            self.barang[kodeProduk] = kuantitas        
        

    def hapusProduk(self, kodeProduk:str):
        if kodeProduk in self.barang.keys():
            del self.barang[kodeProduk]
            
    def tampilkanCart(self):
        for k,v in self.barang.items():
            print("{} ({})".format(k,v))


#Unit test purpose

import unittest

class TestUtils(unittest.TestCase):

    def test_add_data(self):
        keranjang = ShoppingCart()
        keranjang.tambahProduk("Pisang",2)
        
    def test_remove_data(self):
        keranjang = ShoppingCart()
        keranjang.hapusProduk("Semangka Kuning")


    def test_check_data(self):
        keranjang = ShoppingCart()    
        keranjang.tampilkanCart()

    def test_real_data(self):
        keranjang = ShoppingCart()
        keranjang.tambahProduk("Pisang",2)
        keranjang.tambahProduk("Semangka Kuning",3)
        keranjang.tambahProduk("Apel Merah",1)
        keranjang.tambahProduk("Apel Merah",4)
        keranjang.tambahProduk("Apel Merah",2)
        keranjang.hapusProduk("Semangka Kuning")
        keranjang.hapusProduk("Semangka Merah")
        keranjang.tampilkanCart()

if __name__ == "__main__":
    unittest.main()

    