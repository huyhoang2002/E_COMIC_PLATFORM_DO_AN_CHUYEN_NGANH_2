namespace User_API.Entities.SeedWorks
{
    public abstract class EntityBase
    {
        public Guid Id { get; private set; }
        public DateTime ModifiedDate { get; set; } = DateTime.Now;
    }
}
