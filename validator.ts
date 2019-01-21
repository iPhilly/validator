class ValidateUtil {

    validateNotEmpty(value: string, errMsg: string): string | void {
        if (value.trim().length < 1) {
            return errMsg
        }
    }

    validateMaxLength(value: string, maxLength: number, errMsg: string): string | void {
        if (value.trim().length > maxLength) {
            return errMsg
        }
    }

    validateMinLength(value: string, minLength: number, errMsg: string): string | void {
        if (value.trim().length < minLength) {
            return errMsg
        }
    }

    /// 通用正则表达式
    validateRegexp(value: string, regexp: string, errMsg: string): string | void {
        let rep = new RegExp(regexp)
        if (!rep.test(value)) {
            return errMsg
        }
    }

    /// 多条件正则表达式校验
    validateMultiRegexp(value: string, regexps: string[], errMsg: string): string | void {
        return regexps.map((exp)=>{
            if (!(RegExp(exp)).test(value)) { return errMsg }
        }).join('\n')
    }

    //// 常用校验

    /// 手机号
    validatePhone(value: string): string | void {
        let exp = `^1[0-9]{10}$`
        return this.validateRegexp(value,exp,'手机号码格式不正确')
    }

    /// 电子邮箱
    validateEmail(value: string): string | void {
        let exp = `^[\\w!#$%&'*+/=?^_\`{|}~-]+(?:\\.[\\w!#$%&'*+/=?^_\`{|}~-]+)*@(?:[\\w](?:[\\w-]*[\\w])?\\.)+[\\w](?:[\\w-]*[\\w])?$`
        return this.validateRegexp(value,exp,'电子邮箱格式不正确')
    }

    /// 汉字姓名
    validateName(value: string): string | void {
        let exp = '^[\u4e00-\u9fa5]{1,10}$'
        return this.validateRegexp(value,exp,'姓名格式不正确')
    }

    /// 身份证号
    validateIdcard(value: string): string | void {
        let exp = `^(\\d{6})(\\d{4})(\\d{2})(\\d{2})(\\d{3})([0-9]|X|x)$`
        return this.validateRegexp(value,exp,'身份证号格式不正确')
    }
}

export const validator = new ValidateUtil()
