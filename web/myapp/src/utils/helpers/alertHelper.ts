import Swal, { SweetAlertResult } from "sweetalert2"

type TAlert = {
    title: string,
    callback?: (result: SweetAlertResult<any>) => void
}



export const AlertSuccess = ({ title }: TAlert) => {
    Swal.fire({
        title,
        icon: "success",
    })
}

export const AlertError = ({ title }: TAlert) => {
    Swal.fire({
        title,
        icon: "error"
    })
}

export const AlertWait = ({ title }: TAlert) => {
    Swal.fire({
        title,
        iconHtml: `<img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_632/04de2e31234507.564a1d23645bf.gif" />`,
        timer: 3000
    })
}

export const AlertWarning = ({ title, callback }: TAlert, ) => {
    Swal.fire({
        title,
        icon: "warning",
        confirmButtonText: "Re-signin",
        showDenyButton: true,
        denyButtonText: "Continue to use as guest"
    }).then(callback)
}

export const AlertProfileNotFound = ({ title }: TAlert) => {
    Swal.fire({
        title,
        icon: "warning",
        confirmButtonText: "Create profile",
        showCloseButton: true
    }).then(result => {
        if (result.isConfirmed) {
            location.href = "/create-profile"
        }
    })
}

