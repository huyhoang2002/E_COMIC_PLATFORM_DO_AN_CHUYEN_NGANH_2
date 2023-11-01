namespace User_API.UnitOfWork.Interfaces
{
    public interface IUnitOfWork
    {
        Task SaveChangeAsync();
    }
}
