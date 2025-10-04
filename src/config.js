import{config} from 'dotenv'
config()

export const PORT= process.env.PORT || 3000
export const DB_HOST=process.env.DB_HOST || ${{MySQL.MYSQLHOST}}
export const DB_PORT=process.env.DB_PORT || ${{MySQL.MYSQLPORT}}
export const DB_USER=process.env.DB_USER || ${{MySQL.MYSQLUSER}}
export const DB_PASSWORD=process.env.DB_PASSWORD || ${{MySQL.MYSQL_ROOT_PASSWORD}}
export const DB_DATABASE=process.env.DB_DATABASE || ${{MySQL.MYSQL_DATABASE}}
