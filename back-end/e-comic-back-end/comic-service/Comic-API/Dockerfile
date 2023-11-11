#See https://aka.ms/customizecontainer to learn how to customize your debug container and how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["comic-service/Comic-API/Comic-API.csproj", "comic-service/Comic-API/"]
COPY ["comic-service/ComicService.Application/ComicService.Application.csproj", "comic-service/ComicService.Application/"]
COPY ["comic-service/ComicService.Infrastructure/ComicService.Infrastructure.csproj", "comic-service/ComicService.Infrastructure/"]
COPY ["comic-service/ComicService.Persistence/ComicService.Persistence.csproj", "comic-service/ComicService.Persistence/"]
COPY ["comic-service/ComicService.Domain/ComicService.Domain.csproj", "comic-service/ComicService.Domain/"]
RUN dotnet restore "comic-service/Comic-API/Comic-API.csproj"
COPY . .
WORKDIR "/src/comic-service/Comic-API"
RUN dotnet build "Comic-API.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Comic-API.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Comic-API.dll"]