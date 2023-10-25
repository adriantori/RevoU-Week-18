"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.caCertificate = exports.MYSQL_URI = exports.PORT = exports.JWT_SIGN = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.JWT_SIGN = process.env.JWT_SIGN;
exports.PORT = process.env.PORT;
exports.MYSQL_URI = process.env.MYSQL_URI;
exports.caCertificate = `
-----BEGIN CERTIFICATE-----
MIIEQTCCAqmgAwIBAgIUdSC16jIteM3s5Yiu5ZacujUz5iIwDQYJKoZIhvcNAQEM
BQAwOjE4MDYGA1UEAwwvYjg1YTJhYjEtMGI3MS00YTAzLWIxNDAtNTRhN2VhNWZh
ZDgyIFByb2plY3QgQ0EwHhcNMjMxMDEzMTIyODQzWhcNMzMxMDEwMTIyODQzWjA6
MTgwNgYDVQQDDC9iODVhMmFiMS0wYjcxLTRhMDMtYjE0MC01NGE3ZWE1ZmFkODIg
UHJvamVjdCBDQTCCAaIwDQYJKoZIhvcNAQEBBQADggGPADCCAYoCggGBAJiQhFth
H0Co5qA52ukJw+HO/uDaLMpV8ty9WRreeyH0uhGWKyuauyC2ehgASRDsLq8y6PUf
PV5uAWblibKHMQGilIrZ8K8bzKUeeB7UpjoJWBFhy//uUb2a46ZvQV8WUO/n+jJo
yDOKrbYGuCHUP8bpOArpeZ8jBa/lp+I6Hr3BuMGAlMPutVEfOWPTbz/qVbw4QL6b
kpgNr42ntkPtNdbMn84i35gh2wi2IyDciltDqkrhhISZsGFOi+Kqx/37wrlJbygi
SDRJ7WP6/gijd0lV6VXZKNk+M+BhTTGyUpt+9YKqWOEg818w+Vk8R3txN6whaTN5
1NMfStqTAryigLP+TRVJDQNp3JuuZ5yFU+E9lwOW7X5NFU6V6OKOWncOmvPj8kW8
KisZRV05P0ueDYRvhS2s2tU1czHsYKExEgbc/bRJIk66qfnYASAl+x/+0C7rkeBf
f05s4YJlQlstIM6hFgzlN+uw2q7lLVCOh/j/6eFgbHoSsqyqik1HKQQ0lwIDAQAB
oz8wPTAdBgNVHQ4EFgQUq9k1DGEHHKtgzVZi8YQltwUs7HAwDwYDVR0TBAgwBgEB
/wIBADALBgNVHQ8EBAMCAQYwDQYJKoZIhvcNAQEMBQADggGBAB8ykPqMW5hHl1P+
5lNi+x0Q0D8Y0W0MWUa/fnFP5Gk8tnfGgRHxFB2nwbzXt23/aPKF4ONDeGC36g9L
cA1PGRlaXM8cQOcVQaLBur31FC/f0KwRvRvNqX/DKhTXtIpGLOoKYPxZldxCKNlb
fwejvi8gSaqJyTWA6hGs5qFzamO5HMN90P0pGVxLfE8KaxQaHtX06iXGqrPtxz/+
ftQr40cgvewdXxH2kcSiizwPFdJ9ggijFB1vWdDdRqYDY/H+6vrbJDH3tGzNF7Jb
0j1IFFl2bOtsGx8Xzq2FEcojygI/+WQCrsOriYlx1sdAjH30EPDcCHJlKp6X8+xE
KWbD64Qo94fqpBr+vgt4dufxviMWmOFuKTHhvQ7H5oLegvQ9EI1xMOUiOr7zzwpH
L9r1eO67wP3DiYrMIt7ORpA59DEEkAzPwx6s7EB0LNiCHP1ujs1VHw/pU9Hv9a2z
yrac8iCw3KBj69HWkUyCB5bjDPpSysorS6ego8bg7xtwkjmD6w==
-----END CERTIFICATE-----
`;
