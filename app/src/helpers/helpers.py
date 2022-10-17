class BytesIntEncoder:
    @staticmethod
    def encode(str :str) -> int:
        b = str.encode()
        return int.from_bytes(b, byteorder='big')

    @staticmethod
    def decode(i: int) -> str:
        b= i.to_bytes(((i.bit_length() + 7) // 8), byteorder='big')
        return b.decode()  