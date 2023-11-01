#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["auth-service/API/API.csproj", "auth-service/API/"]
COPY ["auth-service/AuthService.Application/AuthService.Application.csproj", "auth-service/AuthService.Application/"]
COPY ["auth-service/AuthService.Infrastructure/AuthService.Infrastructure.csproj", "auth-service/AuthService.Infrastructure/"]
COPY ["auth-service/AuthService.Domain/AuthService.Domain.csproj", "auth-service/AuthService.Domain/"]
RUN dotnet restore "auth-service/API/API.csproj"
COPY . .
WORKDIR "/src/auth-service/API"
RUN dotnet build "API.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "API.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "API.dll"]