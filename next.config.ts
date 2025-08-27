import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  experimental: {
    serverComponentsExternalPackages: ["oracledb"],    
},
sec_case_sensitive_logon: true, 
password_versions:10

};

export default nextConfig;
