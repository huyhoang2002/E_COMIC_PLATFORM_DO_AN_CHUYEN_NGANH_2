namespace User_API.ViewModels.Base
{
    public class BaseResponse
    {
        public bool IsSuccess { get; set; }
        public string Message { get; set; }
        public BaseResponse(bool isSuccess, string message)
        {
            IsSuccess = isSuccess;
            Message = message;
        }

        public static BaseResponse Success()
        {
            return new BaseResponse(true, "success");
        }
        public static BaseResponse Error(string message)
        {
            return new BaseResponse(false, message);
        }
    }

    public class BaseResponse<T>
    {
        public bool IsSuccess { get; set; }
        public T Response { get; set; }
        public string Message { get; set; }
        public BaseResponse(bool isSuccess, T response, string message)
        {
            IsSuccess = isSuccess;
            Response = response;
            Message = message;
        }

        public BaseResponse(bool isSuccess, string message)
        {
            IsSuccess = isSuccess;
            Message = message;
        }

        public static BaseResponse<T> Success(T response)
        {
            return new BaseResponse<T>(true, response, "success");
        }
        public static BaseResponse<T> Error(string message)
        {
            return new BaseResponse<T>(false, message);
        }
    }
}
