
export class Usuario {

    //private _usua_nome: string;
    //public get usua_nome(): string { return this._usua_nome; }
    //public set usua_nome(value: string) { this._usua_nome = value; }

    //private _usua_senha: string;
    //public get usua_senha(): string { return this._usua_senha; }
    //public set usua_senha(value: string) { this._usua_senha = value; }

    //constructor(nome: string, senha: string) {
        //this._usua_nome = nome;
        //this._usua_senha = senha;
    //}

    public ValidaUsuario(_usua_nome:string, _usua_senha:string): string {

        if (_usua_nome == "" || _usua_senha == "")
            return "Informe um usuário e senha válidos.";
        else if (this.ValidaUsuarioBanco(_usua_nome, _usua_senha) == false)
            return "Usuário e/ou senha inválidos.";
        else
            return "OK"; 
    }

    private ValidaUsuarioBanco(_usua_nome:string, _usua_senha:string): boolean {

        var usu = "Eliel"; //Info. do banco de dados
        var sen = "123"; //Info. do banco de dados

        if (_usua_nome != usu)
            return false;
        else if (_usua_senha != sen)
            return false;
        else
            return true;
    }

}